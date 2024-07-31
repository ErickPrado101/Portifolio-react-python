import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Data {
    name: string;
    aprovações: number;
    trabalhos: number;
    recomendações: number;
}

const data: Data[] = [
    { name: 'Maio', aprovações: 18, trabalhos: 20, recomendações: 10 },
    { name: 'Abr', aprovações: 17, trabalhos: 18, recomendações: 9 },
    { name: 'Mar', aprovações: 16, trabalhos: 19, recomendações: 9 },
    { name: 'Fev', aprovações: 15, trabalhos: 17, recomendações: 8 },
    { name: 'Jan', aprovações: 14, trabalhos: 16, recomendações: 8 },
    { name: 'Dez', aprovações: 13, trabalhos: 15, recomendações: 8 },
    { name: 'Nov', aprovações: 14, trabalhos: 16, recomendações: 9 },
    { name: 'Out', aprovações: 15, trabalhos: 17, recomendações: 9 },
    { name: 'Set', aprovações: 16, trabalhos: 18, recomendações: 10 },
    { name: 'Ago', aprovações: 17, trabalhos: 19, recomendações: 10 },
    { name: 'Jul', aprovações: 15, trabalhos: 17, recomendações: 9 },
    { name: 'Jun', aprovações: 14, trabalhos: 16, recomendações: 8 },
];

const Graph: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="recomendações" stroke="#098037" />
                <Line type="monotone" dataKey="aprovações" stroke="#241d9c" />
                <Line type="monotone" dataKey="trabalhos" stroke="#0053ee" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Graph;
