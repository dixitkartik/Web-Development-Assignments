function calculateTip() {
    const bill = Number(document.getElementById("bill").value);
    const percentage = Number(document.getElementById("tip").value);

    if (
        document.getElementById("bill").value.trim() === "" ||
        document.getElementById("tip").value.trim() === "" ||
        !Number.isFinite(bill) ||
        !Number.isFinite(percentage) ||
        bill < 0 ||
        percentage < 0 ||
        percentage > 100
    ) {
        alert("Enter a valid bill and tip percentage (0–100).");
        return;
    }

    const tipAmount = bill * percentage / 100;
    const total = bill + tipAmount;

    document.getElementById("tipResult").textContent =
        "Tip: ₹" + tipAmount.toFixed(2);

    document.getElementById("totalResult").textContent =
        "Total: ₹" + total.toFixed(2);
}