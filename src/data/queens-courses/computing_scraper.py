from bs4 import BeautifulSoup, NavigableString
from urllib.request import urlopen
import json

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
for course in courses:
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

    course_dict = {"code": code, "title": title, "description": description,
                   "terms": terms, "link": link}
    course_list.append(course_dict)

with open(w_filename, 'w') as f:
    json.dump(course_list, f, indent=4)
