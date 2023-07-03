from flask import Flask, render_template, request, session, redirect, url_for, current_app, g
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(app.instance_path, 'coffee_shop.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'your_secret_key'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(50), nullable=False)

class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Float, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    item_id = db.Column(db.Integer, db.ForeignKey('item.id'), nullable=False)

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        # Validate input, check if the username already exists, etc.

        # Save the user to the database
        user = User(username=username, password=password)
        db.session.add(user)
        db.session.commit()

        return redirect(url_for('signin'))
    return render_template('signup.html')

@app.route('/signin', methods=['GET', 'POST'])
def signin():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        # Validate input, check if the user exists in the database, etc.

        # Set the user's ID in the session
        session['user_id'] = user.id
        return redirect(url_for('menu'))
    return render_template('signin.html')

@app.route('/menu')
def menu():
    items = Item.query.all()
    return render_template('menu.html', items=items)

@app.route('/add_to_cart/<int:item_id>')
def add_to_cart(item_id):
    # Retrieve the user's ID from the session
    user_id = session.get('user_id')

    if user_id:
        # Create an order for the selected item
        order = Order(user_id=user_id, item_id=item_id)
        db.session.add(order)
        db.session.commit()

        return redirect(url_for('cart'))
    else:
        return redirect(url_for('signin'))

@app.route('/cart')
def cart():
    user_id = session.get('user_id')

    if user_id:
        # Retrieve the user's orders from the database
        orders = Order.query.filter_by(user_id=user_id).all()
        item_ids = [order.item_id for order in orders]
        items = Item.query.filter(Item.id.in_(item_ids)).all()

        return render_template('cart.html', items=items)
    else:
        return redirect(url_for('signin'))

@app.route('/place_order')
def place_order():
    user_id = session.get('user_id')

    if user_id:
        # Calculate the total price of the items in the user's cart
        orders = Order.query.filter_by(user_id=user_id).all()
        item_ids = [order.item_id for order in orders]
        items = Item.query.filter(Item.id.in_(item_ids)).all()
        total_price = sum(item.price for item in items)

        return render_template('place_order.html', total_price=total_price)
    else:
        return redirect(url_for('signin'))

@app.route('/manager')
def manager():
    orders = Order.query.all()
    return render_template('manager.html', orders=orders)

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
