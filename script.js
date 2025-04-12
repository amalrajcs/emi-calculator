function calculateEMI() {
    let P = parseFloat(document.getElementById("principal").value);
    let annualRate = parseFloat(document.getElementById("rate").value);
    let N = parseInt(document.getElementById("months").value);

    let R = annualRate / 12 / 100; // Monthly interest rate

    if (P > 0 && annualRate > 0 && N > 0) {
        let EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
        document.getElementById("result").innerText = `Monthly EMI: ₹${EMI.toFixed(2)}`;
    } else {
        document.getElementById("result").innerText = "Enter valid inputs!";
    }
}