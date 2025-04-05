'use strict';
const section2 = document.querySelector('.section2');
const all = document.querySelectorAll('.all');
const active = document.querySelectorAll('.active');
const inactive = document.querySelectorAll('.inactive');
const all1 = document.querySelector('#all');
const active1 = document.querySelector('#active');
const inactive1 = document.querySelector('#inactive');

//fetching json file
fetch('./browser-extensions-manager-ui-main/data.json')
.then(response => response.json())
.then(data => {
    const Data = data;
    const manager = new Manager(Data)
})
.catch(error => console.log('ERROR LOADING JSON' ,error));


class Manager {
    constructor(elements) {
        this.elements = elements;
        this._all()
        this._clicks();
        ////////////////
        //static state
        all.forEach(elem =>{
            elem .style.backgroundColor = 'red';
        })
        all1.style.color = 'black';
    }
    ////////////////////////
    //prototype that handles clicks
    _clicks(){
        const allbutton = () =>{
            section2.innerHTML = '';
            this._all()
            all.forEach(elem =>{
                elem .style.backgroundColor = 'red';
            })
            all1.style.color = 'black';
            active.forEach(elem =>{
                elem .style.backgroundColor = 'hsl(226, 11%, 37%)';
            })
            active1.style.color = 'white';
            ////
            inactive.forEach(elem =>{
                elem .style.backgroundColor = 'hsl(226, 11%, 37%)';
            })
            inactive1.style.color = 'white';
            ///
            
        }
        all1.addEventListener('click', function() {
            allbutton();
        });

        ////////////////////
        //active
        const activebutton = () =>{
            section2.innerHTML = '';
            this._active()
            active.forEach(elem =>{
                elem.style.backgroundColor = 'red';
            })
            active1.style.color = 'black';
            ///
            all.forEach(elem =>{
                elem .style.backgroundColor = 'hsl(226, 11%, 37%)';
            })
            all1.style.color = 'white';
            ////
            inactive.forEach(elem =>{
                elem .style.backgroundColor = 'hsl(226, 11%, 37%)';
            })
            inactive1.style.color = 'white';
        }
            active1.addEventListener('click', function() {
            activebutton();
        }); 
        ////////////////////
        //inactive
        const inactivebutton = () =>{
            section2.innerHTML = '';
            this._inactive()
            inactive.forEach(elem =>{
                elem.style.backgroundColor = 'red';
            })
            inactive1.style.color = 'black';
            ///
            all.forEach(elem =>{
                elem .style.backgroundColor = 'hsl(226, 11%, 37%)';
            })
            all1.style.color = 'white';
            ///
            active.forEach(elem =>{
                elem .style.backgroundColor = 'hsl(226, 11%, 37%)';
            })
            active1.style.color = 'white';
        }
        inactive1.addEventListener('click', function() {
            inactivebutton();
        }); 
    }



    _all(){
        this.elements.forEach(item => {
            section2.insertAdjacentHTML('beforeend',`<div class="div">
            <div class="div1">
                <img src="browser-extensions-manager-ui-main${item.logo.slice(1)}" alt="">
                <div class ='div11'>
                    <p>${item.name}</p>
                    <div>${item.description}</div>
                </div>
            </div>
            <div class="div2">
                <div class="remove"><div>Remove</div></div>
                <div ${item.isActive === true ? 'class="button"':'class="button1"'}>
                    <div ${item.isActive === true ? 'class="toggle"':'class="toggle1"'}></div>
                </div>
            </div>
        </div>`);
                
        });
    }
    _active(){
       const filtered = this.elements.filter(item => item.isActive === true);
       console.log(filtered);
       filtered.forEach(elem =>{
            section2.insertAdjacentHTML('beforeend',`<div class="div">
            <div class="div1">
                <img src="browser-extensions-manager-ui-main${elem.logo.slice(1)}" alt="">
                <div class ='div11'>
                    <p>${elem.name}</p>
                    <div>${elem.description}</div>
                </div>
            </div>
            <div class="div2">
                <div class="remove"><div>Remove</div></div>
                <div class="button">
                    <div class="toggle"></div>
                </div>
            </div>
        </div>`);
        });
    }
    _inactive(){
        const filtered = this.elements.filter(item => item.isActive !== true);
        console.log(filtered);
        filtered.forEach(elem =>{
             section2.insertAdjacentHTML('beforeend',`<div class="div">
             <div class="div1">
                 <img src="browser-extensions-manager-ui-main${elem.logo.slice(1)}" alt="">
                 <div class ='div11'>
                     <p>${elem.name}</p>
                     <div>${elem.description}</div>
                 </div>
             </div>
             <div class="div2">
                 <div class="remove"><div>Remove</div></div>
                 <div class="button1">
                     <div class="toggle1"></div>
                 </div>
             </div>
         </div>`);
         });
     }
}