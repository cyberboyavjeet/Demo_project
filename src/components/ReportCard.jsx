import React from "react"
function ReportCard (){
    const students=[
        {id:1, sname:'Avjeet',marks:0},{id:2, sname:'Gaurav',marks:20},{id:3, sname:'Ashish',marks:18}
        ,{id:4,sname:'Aru',marks:19},{id:5,sname:'Ayush',marks:7},{id:6,sname:'charles',marks:0}
    ]   
    return (
        <div className="min-h-screen bg-gray-100 p-6 ">
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-blue-600 text-center">
                    Students' Result
                </h2>
                <ul className="space-y-4 ">
                    {
                        students.map( (student)=>(<li key={student.id} className="flex justify-between item-center border p-3 rounded">
                            {/* student name */}
                            <div>
                                <span className="text-gray-800 font-medium">{student.sname}</span>
                                {/* Topper badge */}
                                {
                                    student.marks>18 && (<span className="text-sm text-blue-600 ml-3">(Topper)</span>)
                                }
                            </div>
                            {/* Conditional Redndering (Pass/Fail) */}
                            <span className={ student.marks>=8 ? 'text-green-600 font-semiblod' : 'text-red-600 font-semibold'}>{ student.marks>=8 ? 'Pass' : 'Fail'}</span>
                        </li>))
                    }
                </ul>
            </div>
        </div>

    )
}
export default ReportCard