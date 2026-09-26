
/*  NAVIGATION  */
 
function goDashboard() {
    window.location.href = "dashboard.html";
}
 
function goOperations() {
    window.location.href = "recipt.html";
}
 
function goStock() {
    window.location.href = "stock.html";
}
 
function goHistory() {
    window.location.href = "history.html";
}
 
function goSettings() {
    window.location.href = "setting.html";
}
 
function goProfile() {
    window.location.href = "profile.html";
}
 
function logout() {
 
    const confirmLogout =
        confirm("Are you sure you want to logout?");
 
    if (confirmLogout) {
        window.location.href = "index.html";
    }
}
 
 
/*  PROFILE DATA  */
 
function getInitial(name) {
 
    if (!name) {
        return "A";
    }
 
    return name.trim().charAt(0).toUpperCase();
}
 
function loadProfile() {
 
    const name =
        localStorage.getItem("profileFullName") || "Admin";
 
    const empId =
        localStorage.getItem("profileEmployeeId") || "EMP-001";
 
    const email =
        localStorage.getItem("profileEmail") ||
        localStorage.getItem("stocksenseEmail") || "";
 
    const phone =
        localStorage.getItem("profilePhone") || "";
 
    const role =
        localStorage.getItem("profileRole") || "Inventory Manager";
 
    const warehouse =
        localStorage.getItem("profileWarehouse") || "Main Warehouse";
 
 
    document.getElementById("fullName").value = name;
    document.getElementById("employeeId").value = empId;
    document.getElementById("profileEmail").value = email;
    document.getElementById("profilePhone").value = phone;
    document.getElementById("profileRoleSelect").value = role;
    document.getElementById("profileWarehouseSelect").value = warehouse;
 
    updateProfileDisplay(name, role, empId, warehouse);
}
 
function updateProfileDisplay(name, role, empId, warehouse) {
 
    const initial = getInitial(name);
 
    document.getElementById("profileName").textContent = name;
    document.getElementById("profileRole").textContent = role;
    document.getElementById("profileEmpId").textContent = empId;
    document.getElementById("profileWarehouse").textContent = warehouse;
    document.getElementById("profileAvatar").textContent = initial;
 
    document.getElementById("headerUserName").textContent = name;
    document.getElementById("headerUserRole").textContent = role;
    document.getElementById("headerAvatar").textContent = initial;
}
 
function saveProfile() {
 
    const name =
        document.getElementById("fullName").value.trim();
 
    const empId =
        document.getElementById("employeeId").value.trim();
 
    const email =
        document.getElementById("profileEmail").value.trim();
 
    const phone =
        document.getElementById("profilePhone").value.trim();
 
    const role =
        document.getElementById("profileRoleSelect").value;
 
    const warehouse =
        document.getElementById("profileWarehouseSelect").value;
 
    const message =
        document.getElementById("profileMessage");
 
 
    if (!name) {
 
        message.style.color = "red";
        message.innerHTML = "Please enter your full name.";
        return;
    }
 
    if (!empId) {
 
        message.style.color = "red";
        message.innerHTML = "Please enter your employee ID.";
        return;
    }
 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
    if (!email || !emailPattern.test(email)) {
 
        message.style.color = "red";
        message.innerHTML = "Please enter a valid email address.";
        return;
    }
 
    if (phone && !/^[0-9+\-\s]{7,15}$/.test(phone)) {
 
        message.style.color = "red";
        message.innerHTML = "Please enter a valid phone number.";
        return;
    }
 
 
    localStorage.setItem("profileFullName", name);
    localStorage.setItem("profileEmployeeId", empId);
    localStorage.setItem("profileEmail", email);
    localStorage.setItem("profilePhone", phone);
    localStorage.setItem("profileRole", role);
    localStorage.setItem("profileWarehouse", warehouse);
 
    updateProfileDisplay(name, role, empId, warehouse);
 
    message.style.color = "green";
    message.innerHTML = "✓ Profile updated successfully.";
}
 
function resetProfile() {
 
    document.getElementById("profileMessage").innerHTML = "";
    loadProfile();
}
 
 
/*  PASSWORD  */
 
function changePassword() {
 
    const current =
        document.getElementById("currentPassword").value;
 
    const newPass =
        document.getElementById("newPassword").value;
 
    const confirmPass =
        document.getElementById("confirmNewPassword").value;
 
    const message =
        document.getElementById("passwordMessage");
 
    const savedPassword =
        localStorage.getItem("stocksensePassword");
 
 
    if (!current) {
 
        message.style.color = "red";
        message.innerHTML = "Please enter your current password.";
        return;
    }
 
    if (savedPassword && current !== savedPassword) {
 
        message.style.color = "red";
        message.innerHTML = "✗ Current password is incorrect.";
        return;
    }
 
    if (newPass.length < 8) {
 
        message.style.color = "red";
        message.innerHTML = "New password must contain at least 8 characters.";
        return;
    }
 
    if (newPass !== confirmPass) {
 
        message.style.color = "red";
        message.innerHTML = "✗ New passwords do not match.";
        return;
    }
 
    localStorage.setItem("stocksensePassword", newPass);
 
    message.style.color = "green";
    message.innerHTML = "✓ Password updated successfully.";
 
    resetPasswordFields();
}
 
function resetPasswordFields() {
 
    document.getElementById("currentPassword").value = "";
    document.getElementById("newPassword").value = "";
    document.getElementById("confirmNewPassword").value = "";
}
 
 
window.onload = loadProfile;
 