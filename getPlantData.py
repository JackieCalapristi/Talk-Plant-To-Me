import requests

r = requests.get('https://trefle.io/api/v1/plants?token=V0FEWm1DcEdlTTBFUUZqTkczVEx5UT09')

print(r.json())