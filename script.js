// Calculate BMI Function (Updated with Health Status Logic)
function calculateBMI() {
    // 1. Get values from the input fields in index.html
    const weightInput = document.getElementById('weight').value;
    const heightCmInput = document.getElementById('height').value;
    const resultDiv = document.getElementById('result-box');

    // Convert inputs to numbers
    const weight = parseFloat(weightInput);
    const heightCm = parseFloat(heightCmInput);

    // 2. Check if the inputs are valid numbers
    if (weight > 0 && heightCm > 0) {
        // Convert cm to meters
        const heightM = heightCm / 100;
        
        // BMI Formula: weight (kg) / [height (m)]^2
        const bmi = (weight / (heightM * heightM)).toFixed(1);

        // 3. Determine the Health Status (Logic Part based on WHO standards)
        let status = "";
        let color = "";

        if (bmi < 18.5) {
            status = "Underweight (Need to eat more!)";
            color = "#f39c12"; // Orange
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            status = "Normal weight (Healthy Range - Keep it up!)";
            color = "#27ae60"; // Green
        } else if (bmi >= 25 && bmi <= 29.9) {
            status = "Overweight (Time for some exercise!)";
            color = "#e67e22"; // Dark Orange
        } else {
            status = "Obesity (Please consult a doctor for advice.)";
            color = "#e74c3c"; // Red
        }

        // 4. Display the results clearly in English on the website
        resultDiv.style.display = "block"; // Make the result box visible
        resultDiv.style.marginTop = "20px";
        resultDiv.style.padding = "15px";
        resultDiv.style.borderRadius = "8px";
        resultDiv.style.backgroundColor = "#f8f9fa"; // Light gray background
        // Dynamic color border based on health status
        resultDiv.style.borderLeft = `5px solid ${color}`;
        
        resultDiv.innerHTML = `
            <h3 style="color: ${color}; margin: 0;">Your BMI is: ${bmi}</h3>
            <p style="margin: 10px 0 0; font-weight: bold; color: #333;">Status: ${status}</p>
            <p style="margin: 5px 0 0; font-size: 0.9em; color: #666;">
                Calculated based on weight of ${weight}kg and height of ${heightCm}cm.
            </p>
        `;
    } else {
        // Show an error message if fields are empty or invalid
        alert("Please enter valid positive numbers for height and weight!");
    }
}

// Logout / Exit Function (Shared)
function logout() {
    // Show a confirmation box in English
    if (confirm("Are you sure you want to log out of the Health Portal?")) {
        // Clear the screen and show a goodbye message
        document.body.innerHTML = `
            <div style="text-align:center; padding-top:150px; font-family: sans-serif;">
                <h1>Successfully Logged Out</h1>
                <p>Thank you for using our BMI Portal. Have a healthy day!</p>
                <button onclick="location.href='index.html'" style="padding:10px 20px; cursor:pointer; background:#27ae60; color:white; border:none; border-radius:5px;">Return to Home</button>
            </div>
        `;
    }
}