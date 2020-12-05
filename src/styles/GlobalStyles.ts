import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
* {
 margin:0;
 padding:0;
}

body{

    background:#000;
    color:#fff;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
.content{
    max-width:1200px;
    margin:0 auto;
    padding: 0 30px;
}


header#main-header{
 
 height:46px;
 box-shadow: 0 1px 1px rgba(30, 130, 79, 0.4)
}

header#main-header .azul{
  color: #0070f3;
}

.verde{
  color: #04d361;
}

.branco{
  color: #fff;
}

header#main-header .verde{
 
 color: #04d361;
}

header#main-header .preto{
 
 color: #000;
}

header#main-header .content{
    display:flex;
 align-items:center;
 justify-content:space-between;
 height:100%;

}

a{
  text-decoration: none;
   color:#fff
}

a:hover{
    color: #04d361;
}

header#main-header nav ul{
 display:flex;
 list-style:none;
}

header#main-header nav ul li{
 display:flex;
 align-items:center;
 font-size:18px;
 color:#fff;
 font-weight:bold;
 margin-left:50px;
}


div.wrapper-content{

    margin-top: 40px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:600;
    
}


div.wrapper-content section.left{
    width:55%;
    height:600;
    font-size: 4rem;

}

div.wrapper-content section.right{
    
    width:45%;
}

.title_name {
  margin: 0;
  line-height: 1.15;
  color: #04d361;
}

.button{
  display: inline-block;
  background-color: #04d361;
  color: #fff;
  padding: .75rem 2.5rem;
  font-weight: bold;
  border-radius: .5rem;
  font-size: 1rem;
}
.button:hover{
  color: #fff;
  box-shadow: 0 10px 36px rgba(0,0,0,.15);
}


.img{
 border-radius: 50% ;
}

.img_about{
    
    border-radius: 20% ;
}


div.footer{
margin-top:100px;
display:flex;
align-items:center;
justify-content:space-between;
background-color:#04d361

}







`;
