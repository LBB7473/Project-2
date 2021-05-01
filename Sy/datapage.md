The data driving our pages is sourced from the following:

Heart Disease (18 & Over) 2011-2012 from The GeoHub, City of Los Angeles
https://geohub.lacity.org/datasets/26ebd4d3d7e6423587ed10be04c201d8_0?geometry=-121.138%2C33.660%2C-115.911%2C34.456

Los Angeles Index of Change
https://geohub.lacity.org/datasets/57e9231c3bd34d44ae49b309b0cb440e_1?geometry=-121.025%2C33.622%2C-115.798%2C34.419&selectedAttribute=HH_Incom_2

Cigarette and Tobacco Retailers
https://data.ca.gov/dataset/cigarette-and-tobacco-retailers1

We have both filtered and edited the GeoJSON files to better fit the scope of our intended analysis. The following are links to download our revised datasets:
DOWNLOAD Heart Disease (18 & Over) 2011-2012
DOWNLOAD Los Angeles Index of Change
DOWNLOAD Cigarette and Tobacco Retailers

The major edits are as follows and will be described in greater detail below:
- Removing all zip codes that have Evaluated "No" in the Los Angelese Index of Change dataset
- Converting the ZIPCODE entries in the Cigarette and Tobacco Retailers dataset from int datatypes with 9 characters to string datatypes with 5 characters
- Limiting zip codes in all datasets to only those in common between them, resulting in only 109 zip codes being represented for the greater Los Angeles area

The following serves as a more complete documentation that describes both the primary data and our edited data. We have elected to provide the following metadata as the datasources' metadata was either underwhelming, incomplete or hard to find. 

1. Heart Disease (18 & Over) 2011-2012
https://geohub.lacity.org/datasets/26ebd4d3d7e6423587ed10be04c201d8_0?geometry=-121.138%2C33.660%2C-115.911%2C34.456

Disclaimer: We will largely be using definitions as noted by The GeoHub, City of Los Angeles as to avoid straying from the intended interpretation of the dataset.
  - Description
    - Adult respondents ages 18+ who were ever diagnosed with heart disease by a doctor
      - Years covered are 2011 to 2012 by zip code. Data taken from the California Health Interview Survey Neighborhood Edition (AskCHIS NE) (http://askchisne.ucla.edu/), downloaded January 2016.
    - Character set: UTF-8
    - Each object in "features" has an "attributes" argument containing the Variables discussed below and a "geometry" argument containing a geometric polygon describing the ZIP area in the following format:
```
{
    "type": "FeatureCollection",
    "name": "efbc8d51-b624-4dd5-b626-74839dbbae42202043-1-133wcty.8a3m",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 1,
                "ZIPCODE": "#####",
                "Zip_code": "#####",
                "PAdHrtDis": 0.0##,
                "PAdHrtDis2": #.#,
                "NAdHrtDis": ####.#,
                "Pop_18olde": #####
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            LONGITUDE1,
                            LATITUDE1
                        ],
                        [
                            LONGITUDE2,
                            LATITUDE2
                        ], ...
                    ]
                ]
            }
        }, ...
    ]
}
```
  - Variables
    - Object ID (OBJECTID) - The index or the ordered identifier for a single object in the geoJSON
    - Zip Code (ZIPCODE) - The zipcode (as a string) describing the area defined in "geometry"
    - Zip Code (Zip_code) - The alternate zipcode (as a string) with nodiscernable difference from ZIPCODE
    - Proportion of Adults with Heart Disease (PAdHrtDis) - The proportion of adult respondents who were ever diagnosed with heart disease by a doctor; Calculated by (NAdHrtDis / Pop_18olde)
    - Percent of Adults with Heart Disease (PAdHrtDis2) - The percent of adult respondents who were ever diagnosed with heart disease by a doctor; Calculated by (NAdHrtDis / Pop_18olde) * 100
    - Number of Adults with Heart Disease (NAdHrtDis) - The number of adult respondents who were ever diagnosed with heart disease by a doctor, adjusted for Po_18older
    - Population Size (Pop_18olde) - The population size for that ZIPCODE
  - Limitations
    - The dataset will be reduced to only include the zipcodes that are also present in the Los Angeles Index of Change and Cigarette and Tobacco Retailers datasets
2. Los Angeles Index of Change
https://geohub.lacity.org/datasets/57e9231c3bd34d44ae49b309b0cb440e_1?geometry=-121.025%2C33.622%2C-115.798%2C34.419&selectedAttribute=HH_Incom_2

Disclaimer: We will largely be using definitions as noted by The GeoHub, City of Los Angeles as to avoid straying from the intended interpretation of the dataset.
  - Description
    - The Los Angeles Index of Neighborhood Change is a tool that allows users to explore the extent to which Los Angeles Zip Codes have undergone demographic change from 2000 to 2014
    - Created in 2015/2016, the data comes from 2000, 2005, 2013, and 2014
    - Each object in "features" has an "attributes" argument containing the Variables discussed below and a "geometry" argument containing a geometric polygon describing the ZIP area in the following format:
```
{
    "type": "FeatureCollection",
    "name": "LAINC_2014",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [
        {
            "type": "Feature",
            "properties": {
              "FID": #,
              "zipcode": "#####",
              "Rank": #,
              "Neighborho": "NAME",
              "IRS_Ratio": +/-#.#,
              "HH_Size": #.#,
              "Per_White": #.#,
              "Per_Colleg": #.#,
              "Rent": #.#,
              "Index_Scor": 0.#,
              "IRS_Rati_1": #.#,
              "IRS_Rati_2": #.#,
              "HH_Incom_2": #####,
              "HH_Size_20": #.##,
              "HH_Size_21": #.##,
              "Percent_Wh": #.##,
              "Percent__1": #.##,
              "College_Pe": #.##,
              "College__1": #.##,
              "Gross_Rent": ###,
              "Gross_Re_1": ###,
              "MedInc4": #####.#####,
              "HHChangAdj": #.###########,
              "Population": #####,
              "Populati_1": #####,
              "Populati_2": #.#,
              "Evaluated": "Yes/No",
              "SHAPE_length": 0.#################,
              "SHAPE_Area": 0.####################
            },
            "geometry": {
                "type": "MultiPolygon"
                "coordinates": [
                    [
                        [
                            LONGITUDE1,
                            LATITUDE1
                        ],
                        [
                            LONGITUDE2,
                            LATITUDE2
                        ], ...
                    ]
                ]
            }
        }, ...
    ]
}
```
  - Variables
    - Object ID (OBJECTID) - The index or the ordered identifier for a single object in the geoJSON
    - Zip Code (zipcode) - The zipcode (as a string) describing the area defined in "geometry"
    - Rank (Rank) - The ranking for each zipcode by Index_Scor, with the highest Index Scores corresponding to the lowest numeric rank; Rank of 0 is given for an Evaluated value "No"
    - Neighborhood (Neighborho) - The name of the neighborhood(s) that predominantly corresponds to each zipcode
    - % Change in IRS Ratio (IRS_Ratio) - Percent change in low/high IRS filer ratio (Comparing 2005 and 2013)
      - For the purposes of this measure, High Income >= $75K Adjust Gross Income tax filer and Low Income <= $25k filers who also received an earned income tax credit
    - % Change in Median Household Size (HH_Size) - Percent change in average household size (Years compared for measures Per_Colleg, Per_White, HHChangAdj, Rent: 2000 and 2014)
    - Change in % White Non Hispanic (Per_White) - Change in percent of White, non-Hispanic/Latino residents
    - Change in % >=25 with Bachelor's Degrees (Per_Colleg) - Change in percent of residents 25 years or older with Bachelor's Degrees or a higher measure
    - % Change in Rent (Inflation Adjusted) (Rent) - % Change in median gross rent (2000 rent is adjusted to 2013/2014 dollars)
    - Index Score (Index_Scor) - This is an aggregate of six demographic measures indicative of gentrification, standardized and combined using weights that reflect the proportion of each measure that is statistically significant
      - The measures used are: IRS_Ratio, Per_Colleg, Per_White, HHChangAdj, Rent, HH_Size
    - High to Low AGI Ratio (2000) (IRS_Rati_1) - Ratio of adjusted gross income for high to low in 2000
    - High to Low AGI Ratio (2014) (IRS_Rati_2) - Ratio of adjusted gross income for high to low in 2014
    - Median Household Income (2014) (HH_Incom_2) - Median household income for the year 2014
    - Median Household Size (2000) (HH_Size_20) - The median household size for the year 2000
    - Median Household Size (2013) (HH_Size_21) - The median household size for the year 2013
    - % White Non-Hispanic (2000) (Percent_Wh) - Percent of White, non-Hispanic/Latino residents for the year 2000
    - % White Non-Hispanic (2014) (Percent__1) - Percent of White, non-Hispanic/Latino residents for the year 2014
    - % >=25 w Bachelor's Degree (2000) (College_Pe) - Percent of residents 25 years or older with Bachelor's Degrees or a higher measure for the year 2000
    - % >=25 w Bachelor's Degree (2014) (College__1) - Percent of residents 25 years or older with Bachelor's Degrees or a higher measure for the year 2014
    - Median Gross Rent (2000 - Inflation Adjusted) (Gross_Rent) - Median gross rent for the year 2000 (Adjusted for inflation to 2013/2014 dollars)
    - Median Gross Rent 2014 (Gross_Re_1) - Description
    - Median Household Income (2000 - Inflation Adjusted) (MedInc4) - Median household income for the year 2000 (Adjusted to 2014)
    - % Change in Median Houshold Income (Inflation Adjusted) (HHChangAdj) - Percent change in median household income (2000 income is adjusted to 2014 dollars)
    - Population (2000) (Population) - Population size for the year 2000
    - Population (2014) (Populati_1) - Population size for the year 2014
    - Population Change (2000-2014) (Populati_2) - % change in population size from the year 2000 to 2014
    - Evaluated (Evaluated) - Indicates if Index_Scor has been calculated and a corresponding Rank has been given for that zipcode; Either "Yes" or "No"
    - Shape Length (SHAPE_length) - Indicator describing length of the MultiPolygon defined by coordinates in geometry
    - Shape Area (SHAPE_Area) - Indicator describing the area of the MultiPolygon defined by coordinates in geometry
  - Limitations
    - All entries that have an Evaluated value of No are varying levels of incomplete, with an Index_Scor given a 0 as a placeholder
      - As such, we will be excluding these entires
      - This will limit the number of zipcodes represented
    - The dataset will be reduced to only include the zipcodes that are also present in the Heart Disease (18 & Over) 2011-2012 and Cigarette and Tobacco Retailers datasets
3. Cigarette and Tobacco Retailers
https://data.ca.gov/dataset/cigarette-and-tobacco-retailers1 

Disclaimer: We will largely be using definitions as noted by the Bureau of Justice Statistics as to avoid straying from the intended interpretation of the dataset.
  - Description
    - All active Cigarette and Tobacco Licensees in California and their specific locations as of February 26, 2021
    - Each object in "features" has a "properties" argument containing the Variables discussed below and a "geometry" argument containing a point with a single "coordinates" field:
```
{
    "type": "FeatureCollection",
    "name": "Cigarette_and_Tobacco_Retailers",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": #,
                "STREET": "STREETADDRESS",
                "CITY": "CITY_NAME",
                "STATE": "CA",
                "ZIPCODE": #########,
                "Type": "Retailer"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    LONGITUDE,
                    LATITUDE
               ]
            }
        }, ...
    ]
}
```
  - Variables
    - Object ID (OBJECTID) - The index or the ordered identifier for a single object in the geoJSON
    - Common Name of Variable (STREET) - The street address attached to the point specified in "geometry"
    - Common Name of Variable (CITY) - The city attached to the point specified in "geometry"
    - Common Name of Variable (STATE) - The state attached to the point specified in "geometry"
    - Common Name of Variable (ZIPCODE) - The zipcode (as an integer) attached to the point specified in "geometry"
    - Common Name of Variable (Type) - The type of licensee (commercial entity)
      - For this dataset, every object has the Type: "Retailer"
  - Limitations
    - The data is vastly larger than what we need, as we are only interested in parts of the greater Los Angeles area
      - We have limited the data to only show entries for the ZIPCODEs that exist in both the Heart Disease (18 & Over) 2011-2012 and Los Angeles Index of Change datasets with some special exceptions specified in the data limitations for Los Angeles Index of Change
    - In order to perform this ZIPCODE check, we have altered the ZIPCODEs from an int datatype with 9 characters to a string datatype with 5 characters as to match the other datasets
      - This was done by first casting as a string and then removing the last 4 characters from each string
  - Reliability
  The data appears to be complete, accurate, and recent.
    - Completeness - It provides all the tobacco retailer locations in California without exception
    - Accurate - As the source is data.ca.gov and active retailer licences are approved and tracked by the Special Taxes Policy and Compliance Division, the data should be acknowledged as the primary source for this type of data
    - Recent - The data used was last updated on February 26, 2021

(Title) Tracking LA Tobacco - Gentrification and Heart Disease

We are interested in what may track or indicate the presence of tobacco retailers in the neighborhoods of Los Angeles. We intend to identify what appears to be two completely distinct datasets to track the presence of tobacco retailers in different ways. We landed on Heart Diagnoses which, we believe, would indicate a positive relationship and Level of Gentrification which, we believe, would indicate a negative relationship. 

Our goal is to establish and visualize these relationships through geolocation data to create interactive map overlays and plots. We hope these visualizations can be of use in future public application. 

Contact our Team!

Ben Wankmuller
benwankmuller@gmail.com

Maddie Sachtler
madelinegsachtler@gmail.com

Sy Flores
syestevenflores@gmail.com