from flask import Flask, render_template, request
import datetime
import flask



app = Flask(__name__) 
@app.route("/")
def home_page():
    return render_template("index.html")

@app.route("/showcase", methods = ["POST"])
def showcase():
    print(request.form.get("passcode"))


    return render_template("showcase.html", passcode=request.form.get("passcode"))

@app.route("/test",methods = ["POST"])
def retrieve_data():
    print("yeet")




if __name__ == "__main__":
    app.run(debug=True)