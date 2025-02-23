export const getAvailablePorts = async () => {
    try {
        const response = await fetch("http://localhost:5000/ports");
        const data = await response.json();
        return data.ports || [];
    } catch (error) {
        console.error("Error fetching COM ports:", error);
        return [];
    }
};

export const connectToModbus = async (port) => {
    try {
        const response = await fetch("http://localhost:5000/connect", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ port }),
        });
        return await response.json();
    } catch (error) {
        console.error("Error connecting to Modbus:", error);
        return { success: false, error: "Failed to connect" };
    }
};
