from bs4 import BeautifulSoup, NavigableString
from urllib.request import urlopen
import json
import asyncio
import aiohttp

w_filename = "computing.json"
baseurl = "https://www.cs.queensu.ca"
url = "https://www.cs.queensu.ca/undergraduate/courses/"
page = urlopen(url)
html = page.read().decode("utf-8")
soup = BeautifulSoup(html, "html.parser")

courses_parent = soup.find("ul", {"class": "courses pad"})
assert courses_parent is not None and not isinstance(
    courses_parent, NavigableString)
courses = courses_parent.find_all("li")
course_list = []


async def process_course_link_prereqs(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as resp:
            html = await resp.text()
    soup = BeautifulSoup(html, "html.parser")
    prerequisites_header = soup.find('h2', string='Prerequisite')
    prerequisites_paragraph = prerequisites_header.find_next_sibling(
        'p') if prerequisites_header else None

    if prerequisites_paragraph is not None and not isinstance(
            prerequisites_paragraph, NavigableString):
        prereqs = prerequisites_paragraph.find_all("span", {"class": "course"})
        return [prereq["data-course"] for prereq in prereqs]
    else:
        return []


async def process_course(course):
    code = course.find("span", {"class": "code"}).text
    title = course.find("span", {"class": "title"}).text
    description = course.find("span", {"class": "description"}).text
    terms = []
    if course.find("a", {"class": "badge term-fall"}) != None:
        terms.append("fall")
    if course.find("a", {"class": "badge term-winter"}) != None:
        terms.append("winter")
    if course.find("a", {"class": "badge term-summer"}) != None:
        terms.append("summer")

    link = baseurl+course.find("a")['href']
    prereqs = await process_course_link_prereqs(link)

    course_dict = {"code": code, "title": title, "description": description,
                   "terms": terms, "prerequisites": prereqs}
    course_list.append(course_dict)


async def gather_tasks():
    await asyncio.gather(*(process_course(course) for course in courses))

# Run all the tasks concurrently
asyncio.run(gather_tasks())

with open(w_filename, 'w') as f:
    json.dump(course_list, f, indent=4)
