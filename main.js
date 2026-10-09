// ==========================================
// OvaSync Health - script.js
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ---------- Sensor Data ----------
    let healthData = {
        heartRate: 74,
        temperature: 36.7,
        ecg: "Normal",
        motion: "Stable",
        latitude: 20.9042,
        longitude: 74.7749,
        satellites: 7,
        drugStatus: "Ready",
        emergency: false
    };

    // ---------- Helper ----------
    function setText(id, value) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value;
        }
    }

    // ---------- Update Dashboard ----------
    function updateDashboard() {

        setText("heartRate", healthData.heartRate + " BPM");
        setText("temperature", healthData.temperature.toFixed(1) + " °C");
        setText("ecgStatus", healthData.ecg);
        setText("motionStatus", healthData.motion);

        setText(
            "gpsLocation",
            healthData.latitude.toFixed(6) +
            ", " +
            healthData.longitude.toFixed(6)
        );

        setText("satellites", healthData.satellites);
        setText("drugStatus", healthData.drugStatus);

        const emergencyStatus =
            document.getElementById("emergencyStatus");

        if (emergencyStatus) {
            emergencyStatus.textContent =
                healthData.emergency
                    ? "EMERGENCY ACTIVE"
                    : "SYSTEM NORMAL";
        }
    }

    // ---------- Heart Rate Simulation ----------
    function simulateHeartRate() {

        // Normal demo range: 70–80 BPM
        healthData.heartRate =
            Math.floor(Math.random() * 11) + 70;

        setText(
            "heartRate",
            healthData.heartRate + " BPM"
        );
    }

    // ---------- Temperature Simulation ----------
    function simulateTemperature() {

        healthData.temperature =
            36.5 + Math.random() * 0.6;

        setText(
            "temperature",
            healthData.temperature.toFixed(1) + " °C"
        );
    }

    // ---------- Motion ----------
    function updateMotion() {

        const motionStates = [
            "Stable",
            "Walking",
            "Moving",
            "Stable"
        ];

        healthData.motion =
            motionStates[
                Math.floor(Math.random() * motionStates.length)
            ];

        setText(
            "motionStatus",
            healthData.motion
        );
    }

    // ---------- GPS ----------
    function openGPS() {

        const url =
            "https://www.google.com/maps?q=" +
            healthData.latitude +
            "," +
            healthData.longitude;

        window.open(url, "_blank");
    }

    // ---------- Emergency Alert ----------
    function emergencyAlert() {

        healthData.emergency = true;

        setText(
            "emergencyStatus",
            "🚨 EMERGENCY ACTIVE"
        );

        alert(
            "🚨 Emergency Alert!\n\n" +
            "OvaSync Health has detected an emergency condition."
        );
    }

    // ---------- Reset Emergency ----------
    function resetEmergency() {

        healthData.emergency = false;

        setText(
            "emergencyStatus",
            "SYSTEM NORMAL"
        );
    }

    // ---------- Drug Delivery ----------
    function activateDrugDelivery() {

        healthData.drugStatus = "Delivering...";

        setText(
            "drugStatus",
            "💊 Delivering..."
        );

        setTimeout(() => {

            healthData.drugStatus = "Delivered";

            setText(
                "drugStatus",
                "✅ Delivered"
            );

        }, 3000);
    }

    // ---------- ECG ----------
    function updateECG() {

        const ecgStates = [
            "Normal",
            "Normal",
            "Normal",
            "Monitoring"
        ];

        healthData.ecg =
            ecgStates[
                Math.floor(Math.random() * ecgStates.length)
            ];

        setText(
            "ecgStatus",
            healthData.ecg
        );
    }

    // ---------- Buttons ----------
    const gpsButton =
        document.getElementById("gpsButton");

    if (// ==========================================
// OvaSync Health - script.js
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
            
            // ---------- Sensor Data ----------
            let healthData = {
                heartRate: 74,
                temperature: 36.7,
                ecg: "Normal",
                motion: "Stable",
                latitude: 20.9042,
                longitude: 74.7749,
                satellites: 7,
                drugStatus: "Ready",
                emergency: false
            };
            
            // ---------- Helper ----------
            function setText(id, value) {
                const element = document.getElementById(id);
                if (element) {
                    element.textContent = value;
                }
            }
            
            // ---------- Update Dashboard ----------
            function updateDashboard() {
                
                setText("heartRate", healthData.heartRate + " BPM");
                setText("temperature", healthData.temperature.toFixed(1) + " °C");
                setText("ecgStatus", healthData.ecg);
                setText("motionStatus", healthData.motion);
                
                setText(
                    "gpsLocation",
                    healthData.latitude.toFixed(6) +
                    ", " +
                    healthData.longitude.toFixed(6)
                );
                
                setText("satellites", healthData.satellites);
                setText("drugStatus", healthData.drugStatus);
                
                const emergencyStatus =
                    document.getElementById("emergencyStatus");
                
                if (emergencyStatus) {
                    emergencyStatus.textContent =
                        healthData.emergency ?
                        "EMERGENCY ACTIVE" :
                        "SYSTEM NORMAL";
                }
            }
            
            // ---------- Heart Rate Simulation ----------
            function simulateHeartRate() {
                
                // Normal demo range: 70–80 BPM
                healthData.heartRate =
                    Math.floor(Math.random() * 11) + 70;
                
                setText(
                    "heartRate",
                    healthData.heartRate + " BPM"
                );
            }
            
            // ---------- Temperature Simulation ----------
            function simulateTemperature() {
                
                healthData.temperature =
                    36.5 + Math.random() * 0.6;
                
                setText(
                    "temperature",
                    healthData.temperature.toFixed(1) + " °C"
                );
            }
            
            // ---------- Motion ----------
            function updateMotion() {
                
                const motionStates = [
                    "Stable",
                    "Walking",
                    "Moving",
                    "Stable"
                ];
                
                healthData.motion =
                    motionStates[
                        Math.floor(Math.random() * motionStates.length)
                    ];
                
                setText(
                    "motionStatus",
                    healthData.motion
                );
            }
            
            // ---------- GPS ----------
            function openGPS() {
                
                const url =
                    "https://www.google.com/maps?q=" +
                    healthData.latitude +
                    "," +
                    healthData.longitude;
                
                window.open(url, "_blank");
            }
            
            // ---------- Emergency Alert ----------
            function emergencyAlert() {
                
                healthData.emergency = true;
                
                setText(
                    "emergencyStatus",
                    "🚨 EMERGENCY ACTIVE"
                );
                
                alert(
                    "🚨 Emergency Alert!\n\n" +
                    "OvaSync Health has detected an emergency condition."
                );
            }
            
            // ---------- Reset Emergency ----------
            function resetEmergency() {
                
                healthData.emergency = false;
                
                setText(
                    "emergencyStatus",
                    "SYSTEM NORMAL"
                );
            }
            
            // ---------- Drug Delivery ----------
            function activateDrugDelivery() {
                
                healthData.drugStatus = "Delivering...";
                
                setText(
                    "drugStatus",
                    "💊 Delivering..."
                );
                
                setTimeout(() => {
                    
                    healthData.drugStatus = "Delivered";
                    
                    setText(
                        "drugStatus",
                        "✅ Delivered"
                    );
                    
                }, 3000);
            }
            
            // ---------- ECG ----------
            function updateECG() {
                
                const ecgStates = [
                    "Normal",
                    "Normal",
                    "Normal",
                    "Monitoring"
                ];
                
                healthData.ecg =
                    ecgStates[
                        Math.floor(Math.random() * ecgStates.length)
                    ];
                
                setText(
                    "ecgStatus",
                    healthData.ecg
                );
            }
            
            // ---------- Buttons ----------
            const gpsButton =
                document.getElementById("gpsButton");
            
            if (gpsButton) {
                gpsButton.addEventListener(
                    "click",
                    openGPS
                );
            }
            
            const emergencyButton =
                document.getElementById("emergencyButton) {
        gpsButton.addEventListener(
            "click",
            openGPS
        );
    }

    const emergencyButton =
        document.getElementById("emergencyButton