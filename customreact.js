
// customRender=(element, container)=>{
//     const domElement= document.createElement(element.type);
//     domElement.innerHTML=element.children;
//     domElement.setAttribute('href',element.props.href);
//     domElement.setAttribute('target',element.props.target);

//     container.appendChild(domElement);
// }

customRender=(element, container)=>{
    const domElement=document.createElement(element.type);
    domElement.innerHTML=element.children;
    for (const prop in element.props) {
        domElement.setAttribute(prop, element.props.prop)
            
        }
        container.appendChild(domElement);
}


const reactElement={
    type:'a',
    props:{
        href: 'https://google.com',
        target:'_blank'
    },
    children:'Click Me To Visit Google'
}

myfn=function(a,b){
    return(a+b)
}
var result = myfn(1,2);
console.log(result)

const mainContainer=document.querySelector('#root')

customRender(reactElement, mainContainer);