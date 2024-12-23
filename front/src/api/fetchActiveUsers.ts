import instance  from "./instance.ts";

interface Users {
    id: number;
    name: string;
}

const fetchActiveUsers : () => Promise<Users[]> = async () => {
    const response = await instance.get('/chat');
    return response.data;
}

export default fetchActiveUsers

