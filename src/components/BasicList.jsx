function BasicList(){
    const students=['Avjeet','Ayush','Ashish','Aru','Gaurav']
    return (
        <div>
            <h2>Students List</h2>
            <ul>
                {students.map( (student)=>(//map call back Function
                    <li>{student}</li>
                ))}
            </ul>
        </div>
    )

}
export default BasicList