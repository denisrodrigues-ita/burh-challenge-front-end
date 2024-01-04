const url = process.env.BASE_URL;

const apiGrades = {
  async getGrades() {
    try {
      const response: Response = await fetch(`${url}/grades`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      return { response, result };
    } catch (error) {
      throw error;
    }
  },

  //   async createGuest(data: any) {
  //     try {
  //       const response = await fetch(`${url}/guests`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //         body: JSON.stringify(data),
  //       });
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const result = await response.json();
  //       return { response, result };
  //     } catch (error) {
  //       throw error;
  //     }
  //   },

  //   async changeStatusGuest(code: string, status: boolean, token: string) {
  //     try {
  //       const response = await fetch(`${url}/guests/${code}`, {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //         body: JSON.stringify({ attendance_status: status }),
  //       });
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const result = await response.json();
  //       return result;
  //     } catch (error) {
  //       throw error;
  //     }
  //   },

  //   async changeGuestName(code: string, newName: string, token: string) {
  //     try {
  //       const response = await fetch(`${url}/guests/${code}`, {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //         body: JSON.stringify({ name: newName }),
  //       });
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const result = await response.json();
  //       return result;
  //     } catch (error) {
  //       throw error;
  //     }
  //   },
};

export default apiGrades;
