from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from model import give_plan


app = Flask(__name__)
CORS(app)


@app.route("/")
def hello_world():
    return "<p>Server Started successfully!</p>"


places = pd.read_excel('data/data.xlsx',sheet_name='Place')

# Scale rating
min_value = places['rating'].min()
max_value = places['rating'].max()
places['rating'] = ((places['rating'] - min_value) / (max_value - min_value)) * 1.5 + 3.4
places['rating'] = places['rating'].apply(lambda x: round(x, 1))


places['type'] = 'place'
cities = pd.read_excel('data/data.xlsx',sheet_name='City')
cities['type'] = 'city'
accommodation = pd.read_excel('data/data.xlsx',sheet_name='Accommodation')
accommodation['type'] = 'accommodation'
events = pd.read_excel('data/data.xlsx',sheet_name='Events')
events['type'] = 'events'
activities = pd.read_excel('data/data.xlsx',sheet_name='Activities')
activities['type']= 'activities'

allData = places[1:].sort_values(by='rating', ascending=False).to_dict(orient='records') + cities.to_dict(orient='records') + accommodation.to_dict(orient='records') + events.to_dict(orient='records') + activities.sort_values(by='rating', ascending=False).to_dict(orient='records')

@app.route("/data")
def all_data():
    return allData

@app.route("/plan")
def plan():
    user_pref = {
        'days': int(request.args.get('days')),
        'budget': int(request.args.get('budget')),
        'type': request.args.getlist('type'),
        'activities': request.args.getlist('activities'),
        'places':request.args.getlist('places'),
        'accommodation': request.args.get('accommodation'),
        'food': request.args.get('  ')
    }
    try:
        no_of_plans = int(request.args.get('no_of_plans'))
    except:
        no_of_plans = 1
    # return user_pref
    plans = give_plan(user_pref, no_of_plans)
    return plans


    

user_pref = {
    'days': 5,
    'budget': 20000,
    'type': ['Natural', 'Religious'],
    'activities': ['Paragliding'],
    'places': ['Phewa Lake', 'Davis Falls'],
    'accommodation': 'Luxury',
    'food': 'veg'
}