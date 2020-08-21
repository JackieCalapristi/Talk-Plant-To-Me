import requests
import json

r = requests.get('https://trefle.io/api/v1/plants?token=V0FEWm1DcEdlTTBFUUZqTkczVEx5UT09', headers={'accept': 'application/json'})
return r