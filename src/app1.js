import React from 'react'
import './App.css';
import { useState } from 'react';
function app1() {
    const [data, setdata] = useState([
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
       
       
        
        {
            "userId": 8,
            "id": 80,
            "title": "labore in ex et explicabo corporis aut quas",
            "body": "ex quod dolorem ea eum iure qui provident amet\nquia qui facere excepturi et repudiandae\nasperiores molestias provident\nminus incidunt vero fugit rerum sint sunt excepturi provident"
        },
        {
            "userId": 9,
            "id": 81,
            "title": "tempora rem veritatis voluptas quo dolores vero",
            "body": "facere qui nesciunt est voluptatum voluptatem nisi\nsequi eligendi necessitatibus ea at rerum itaque\nharum non ratione velit laboriosam quis consequuntur\nex officiis minima doloremque voluptas ut aut"
        },
       
        {
            "userId": 10,
            "id": 94,
            "title": "qui qui voluptates illo iste minima",
            "body": "aspernatur expedita soluta quo ab ut similique\nexpedita dolores amet\nsed temporibus distinctio magnam saepe deleniti\nomnis facilis nam ipsum natus sint similique omnis"
        },
        {
            "userId": 10,
            "id": 95,
            "title": "id minus libero illum nam ad officiis",
            "body": "earum voluptatem facere provident blanditiis velit laboriosam\npariatur accusamus odio saepe\ncumque dolor qui a dicta ab doloribus consequatur omnis\ncorporis cupiditate eaque assumenda ad nesciunt"
        },
        {
            "userId": 10,
            "id": 100,
            "title": "at nam consequatur ea labore ea harum",
            "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
        }
    ])
    const handleclick = (ind) => {
        console.log(ind);
        data.forEach((data,i)=>{
            let arr=[]
            if (data1.id == ind) {
                data.splice(i,1)
                console.log(data.splice(i,1))
        }else{
            arr.push(data1)
        }
        setdata(arr)
    })
}
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data, i) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                            <td>{data.body}</td>
                            <td><button onClick={e=>handleclick(data.id)}>del</button></td>
                            <td><button onClick={handleclick(i)}>edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default app1