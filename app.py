from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    salary = float(data.get('salary'))
    months = int(data.get('months'))
    goal_amount = float(data.get('goal_amount'))
    saved_so_far = float(data.get('saved_so_far'))

    monthly_saving = goal_amount / months
    saving_percentage = (monthly_saving / salary) * 100

    # تحديث المبلغ المدخر
    updated_saved = saved_so_far + monthly_saving
    progress = (updated_saved / goal_amount) * 100

    return jsonify({
        'monthly_saving': round(monthly_saving, 2),
        'saving_percentage': round(saving_percentage, 2),
        'updated_saved': round(updated_saved, 2),
        'progress': round(progress, 2)
    })

if __name__ == '__main__':
    app.run(debug=True)
