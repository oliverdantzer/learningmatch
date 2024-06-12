from bs4 import BeautifulSoup, NavigableString
from urllib.request import urlopen
import json

w_filename = "computing.json"
baseurl = "https://www.cs.queensu.ca"
url = "https://www.cs.queensu.ca/people/?faculty=on&instructors=on&view=tiles&group=on&filter="
page = urlopen(url)
html = page.read().decode("utf-8")
soup = BeautifulSoup(html, "html.parser")
people_tiles = soup.find("ul", {"class": "people tiles"})
assert people_tiles is not None and not isinstance(
    people_tiles, NavigableString)
people = people_tiles.find_all("li")
people_list = []
for person in people:
    first = person.find("span", {"class": "first-name"}).text
    last = person.find("span", {"class": "last-name"}).text
    img = person.find("img")['src']
    title = person.find("span", {"class": "title"}).text
    person_dict = {"name": f"{first} {last}",
                   "image": baseurl+img, "title": title}
    people_list.append(person_dict)

with open(w_filename, 'w') as f:
    json.dump(people_list, f, indent=4)
