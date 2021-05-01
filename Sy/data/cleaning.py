# Dependencies
import json
import pandas as pd
from pprint import pprint
import requests

# Heart and Change - Overlapping Zipcodes

## Change
base_url = "https://opendata.arcgis.com/datasets/57e9231c3bd34d44ae49b309b0cb440e_1.geojson"
response = requests.get(base_url)

change = response.json()

#### Filter out Evaluated = No

object_change = len(change["features"])

zip_change = []
i = 0
while i < object_change:
    if change["features"][i]["properties"]["Evaluated"] == "Yes":
        zip_change.append(change["features"][i]["properties"]["zipcode"])
    else:
        print(f'{change["features"][i]["properties"]["zipcode"]} evaluates to No.')
    i += 1
zip_change = set(zip_change)

## Heart

base_url = "https://opendata.arcgis.com/datasets/26ebd4d3d7e6423587ed10be04c201d8_0.geojson"
response = requests.get(base_url)

heart = response.json()

object_heart = len(heart["features"])

zip_heart = []
i = 0
while i < object_heart:
    zip_heart.append(heart["features"][i]["properties"]["ZIPCODE"])
    i += 1
zip_heart = set(zip_heart)

## List Comparison

overlap = [value for value in zip_change if value in zip_heart]

# Reduce Data

for x in zip_change:
    if x not in overlap:
        print(x)
print("End of change ZIP's excluded")

for x in zip_heart:
    if x not in overlap:
        print(x)
print("End of heart ZIP's excluded")

## Change

newList = []
for feature in change['features']:
    if feature["properties"]["zipcode"] in overlap:
        newList.append(feature)
print(len(newList))
change['features'] = newList

## Heart

newList = []
for feature in heart['features']:
    if feature["properties"]["ZIPCODE"] in overlap:
        newList.append(feature)
print(len(newList))
heart['features'] = newList

# Tobacco

with open('raw_tobacco.geojson') as x:
    tobacco = json.load(x)

tobacco["features"][0]["properties"]["ZIPCODE"]

object_tobacco = len(tobacco["features"])

i = 0
while i < object_tobacco:
    tobacco["features"][i]["properties"]["ZIPCODE"] = str(tobacco["features"][i]["properties"]["ZIPCODE"])
    tobacco["features"][i]["properties"]["ZIPCODE"] = tobacco["features"][i]["properties"]["ZIPCODE"][:-4]
    i += 1

newList = []
for feature in tobacco['features']:
    if feature["properties"]["ZIPCODE"] in overlap:
        newList.append(feature)
print(len(newList))
tobacco['features'] = newList

# Data Export

with open('tobacco.geojson', 'w') as fp:
    json.dump(tobacco, fp, indent = 4)

with open('heart.geojson', 'w') as fp:
    json.dump(heart, fp, indent = 4)

with open('change.geojson', 'w') as fp:
    json.dump(change, fp, indent = 4)