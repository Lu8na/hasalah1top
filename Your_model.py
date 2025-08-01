def analyze_progress(data):
    saved = data.get("saved", 0)
    amount = data.get("amount", 1)
    months_completed = data.get("monthsCompleted", 0)
    duration = data.get("duration", 1)

    expected_progress = (months_completed / duration) * amount

    if saved >= amount:
        status = "✅ تم تحقيق الهدف بالكامل!"
    elif saved >= expected_progress + 500:
        status = "🔥 أنت متقدم جدًا على الخطة!"
    elif saved >= expected_progress:
        status = "👍 تسير حسب الخطة."
    else:
        status = "⚠️ متأخر عن الخطة، حاول زيادة التوفير."

    return {
        "status": status,
        "saved": saved,
        "expected": round(expected_progress, 2)
    }
