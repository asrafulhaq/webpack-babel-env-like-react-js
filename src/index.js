import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import Student from './components/Student'; 
import Teacher from './components/Teacher';
import './index.css'; 
import './main.scss'; 

getProducts();
function getProducts(){
    
    axios.get('http://localhost:5050/products').then(res => {
        const plist = document.querySelector('.p-list');
        let list = '';
        res.data.map(data => {

            let { name, price, sale_price, photo } = data;

            list += `
            
            <div class="col-md-3">
                <div class="card shadow">
                    <img style="height:250px;object-fit:cover;" class="card-img" src="${ photo }" alt="">
                    <div class="card-body">
                    <h3>${ name }</h3>
                    <p>Price : ${ price }</p>
                    </div>
                </div>                
            </div>
            
            `;
        });

        plist.innerHTML = list;

    });

   
}


















