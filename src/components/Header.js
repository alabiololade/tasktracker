import Button from './Button'

const Header = ({ title, onAdd, showAdd}) => {
return(
        <header className='header'>
<h1>Task tracker</h1> 
<Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
 {/* <Button color='red' text='hello 1'/>
<Button color='blue' text='hello  2'/>  */}

</header>
        
    )
}



// inline css in js
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header