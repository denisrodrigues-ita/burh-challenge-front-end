const url = process.env.BASE_URL;

const apiGrades = {
  async createGrade(data: any) {
    try {
      const response = await fetch(`${url}/grades`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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

  async deleteGrade(id: number) {
    try {
      const response = await fetch(`${url}/grades/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      return { result, response };
    } catch (error) {
      throw error;
    }
  },
};

export default apiGrades;
