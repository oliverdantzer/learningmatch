from bs4 import BeautifulSoup, NavigableString
from urllib.request import urlopen
from selenium import webdriver
import json
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

w_filename = "business.json"
baseurl = "https://smith.queensu.ca"
url = "https://smith.queensu.ca/faculty_and_research/faculty.php"

driver = webdriver.Firefox()

driver.get(url)

WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "faculty_list")))

html = driver.page_source


soup = BeautifulSoup(html, "html.parser")
people_tiles = soup.find("div", {"id": "faculty_list"})
assert people_tiles is not None and not isinstance(
    people_tiles, NavigableString)
people = people_tiles.find_all(
    "div", {"class": "col-sm-6 col-md-4 col-lg-3 mt-5"})
people_list = []
for person in people:
    name = person.find(
        "span", {"class": "d-block text-xl font-black mt-3 mb-2"}).text
    img = person.find("img")['src']
    title = person.find(
        "span", {"class": "d-block text-sm leading-tight"}).text
    person_dict = {"name": name,
                   "image": baseurl+img, "title": title}
    people_list.append(person_dict)

with open(w_filename, 'w') as f:
    json.dump(people_list, f, indent=4)

driver.quit()
