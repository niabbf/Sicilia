from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask import request

app=Flask(__name__)
db=SQLAlchemy(app)

app.config['SQLALCHEMY_DATABASE_URI']='mysql://root:123456@0.0.0.0/project'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False

# Create a new table
class User(db.Model):
    __tablename__ = 'cjytry'
    id = db.Column(db.Integer, primary_key=True)
    psw = db.Column(db.Integer, primary_key=False)


@app.route('/', methods=['POST'])
def login():
    name = request.form['name']
    psww = request.form['password']
    print(name, psww)

    if User.query.filter_by(id=name, psw=psww).first() == None:
        return "fail"
    else:
        return "success"
        
       
@app.route('/register',methods=['POST'])
def register():
    name=request.form['name']
    psww=request.form['password']
    
    if User.query.filter_by(id=name).first() !=None :
        return "fail"
    else:
        user = User(id=name,psw=psww)
        db.session.add(user)
        db.session.commit()
        return "success"
    
        
        

if __name__ == '__main__':
    #db.create_all()
    #user = User(id='123', psw='456')
    #db.session.add(user)
    #db.session.commit()
    app.run(debug=True,host = '0.0.0.0',port=80)
