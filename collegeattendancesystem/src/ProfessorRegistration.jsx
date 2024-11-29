import React from 'react'

export const ProfessorRegistration = () => {
    const check2 = (e) => {
        let passwordm = document.getElementById('passw').value;
        let cpasswordm = document.getElementById('cpassw').value;
        if (passwordm === cpasswordm) {
            document.getElementById('error').innerHTML = `<p style="color:green">Password matched</p>`;
        }
        else {
            document.getElementById('error').innerHTML = `<p style="color:red">Confirm Password doesn't matches</p>`;
        }
    }
    const nextPage = () => {
        document.getElementById('ce').style.left = "-100%";
        document.getElementById('ece').style.left = "0%";
    }
    const nextPage2 = () => {
        document.getElementById('ece').style.left = "-100%";
        document.getElementById('ee').style.left = "0%";
    }
    const nextPage3 = () => {
        document.getElementById('ee').style.left = "-100%";
        document.getElementById('me').style.left = "0%";
    }
    const nextPage4 = () => {
        document.getElementById('me').style.left = "-100%";
        document.getElementById('cse').style.left = "0%";
    }

    const prevPage = () => {
        document.getElementById('ce').style.left = "0%";
        document.getElementById('ece').style.left = "100%";

    }
    const prevPage2 = () => {
        document.getElementById('ece').style.left = "0%";
        document.getElementById('ee').style.left = "100%";
    }
    const prevPage3 = () => {
        document.getElementById('ee').style.left = "0%";
        document.getElementById('me').style.left = "100%";
    }
    const prevPage4 = () => {
        document.getElementById('me').style.left = "0%";
        document.getElementById('cse').style.left = "100%";
    }
    return (

        <form action="http://localhost:3000/professor-registration" method='post'>
            <h2>Professor Registration to the portal</h2>
            <label htmlFor="profname">Enter your name</label>
            <div>
                <input type="text" name="profname" id="profname" className='data' />
            </div>
            <label htmlFor="email">Enter your email</label>
            <div>
                <input type="email" name="email" id="email" className='data' />
            </div>
            <label htmlFor="dept">Enter your department</label>
            <div>
                <input type="text" name="dept" id="dept" className='data' />
            </div>

            <label htmlFor="passw">Create your password</label>
            <div>
                <input type="password" name="passw" id="passw" className='data' />
            </div>
            <label htmlFor="cpassw">Confirm your password</label>
            <div>
                <input type="password" name="cpassw" id="cpassw" className='data' onKeyUp={check2} />
                <div id="error"></div>
            </div>
            <label htmlFor="code">Create your code</label>
            <div>
                <input type="number" name="code" id="code" className="data" />
            </div>
            <h2>Syllabus information</h2>
            <div className="infocontainer">
                <div id="ce">
                    <h3>Civil Engineering</h3>
                    <label htmlFor="ce_syllabus-chap-1">Chapter-1</label>
                    <div>
                        <input type="text" name="ce_syll_chap1" id="ce_syllabus-chap-1" className='data' />
                    </div>
                    <label htmlFor="description1">Description </label>
                    <div>
                        <input type="text" name="ce_syll_desc_chap1" id="description1" className="data" rows={18} />
                    </div>
                    {/* ----------------------------------------------------------*/}
                    <label htmlFor="ce_syllabus-chap-2">Chapter-2</label>
                    <div>
                        <input type="text" name="ce_syll_chap2" id="ce_syllabus-chap-2" className='data' />
                    </div>
                    <label htmlFor="description2">Description </label>
                    <div>
                        <input type="text" name="ce_syll_desc_chap2" id="description2" className="data" rows={18} />
                    </div>

                    {/* ----------------------------------------------------------*/}

                    <label htmlFor="ce_syllabus-chap-3">Chapter-3</label>
                    <div>
                        <input type="text" name="ce_syll_chap3" id="ce_syllabus-chap-3" className='data' />
                    </div>
                    <label htmlFor="description3">Description </label>
                    <div>
                        <input type="text" name="ce_syll_desc_chap3" id="description3" className="data" rows={18} />
                    </div>

                    {/* ----------------------------------------------------------*/}
                    <label htmlFor="ce_syllabus-chap-4">Chapter-4</label>
                    <div>
                        <input type="text" name="ce_syll_chap4" id="ce_syllabus-chap-4" className='data' />
                    </div>
                    <label htmlFor="description4">Description </label>
                    <div>
                        <input type="text" name="ce_syll_desc_chap4" id="description4" className="data" rows={18} />
                    </div>

                    {/* ----------------------------------------------------------*/}
                    <label htmlFor="ce_syllabus-chap-5">Chapter-5</label>
                    <div>
                        <input type="text" name="ce_syll_chap5" id="ce_syllabus-chap-5" className='data' />
                    </div>
                    <label htmlFor="description5">Description </label>
                    <div>
                        <input type="text" name="ce_syll_desc_chap5" id="description5" className="data" rows={18} />
                    </div>

                    {/* ----------------------------------------------------------*/}
                    <label htmlFor="ce_syllabus-chap-6">Chapter-6</label>
                    <div>
                        <input type="text" name="ce_syll_chap6" id="ce_syllabus-chap-6" className='data' />
                    </div>
                    <label htmlFor="description6">Description </label>
                    <div>
                        <input type="text" name="ce_syll_desc_chap6" id="description6" className="data" rowss={18} />
                    </div>

                    {/* ----------------------------------------------------------*/}
                    <div className="buttons">

                        <button type="button" className="next" onClick={nextPage}>Next</button>
                    </div>
                </div>
                <div id="ece">
                    <h3>Electronics and Communication Engineering</h3>
                    <label htmlFor="ece_syllabus-chap-1">Chapter-1</label>
                    <div>
                        <input type="text" name="ece_syll_chap1" id="ece_syllabus-chap-1" className='data' />
                    </div>
                    <label htmlFor="descriptio1">Description</label>
                    <div>
                        <input type="text" name="ece_desc_chap1" id="descriptio1" rows={18} className="data" />
                    </div>
                    <label htmlFor="ece_syllabus-chap-2">Chapter-2</label>
                    <div>
                        <input type="text" name="ece_syll_chap2" id="ece_syllabus-chap-2" className='data' />
                    </div>
                    <label htmlFor="descripti-2">Description</label>
                    <div>
                        <input type="text" name="ece_desc_chap2" id="descripti-2" rows={18} className="data" />
                    </div>
                    <label htmlFor="ece_syllabus-chap-3">Chapter-3</label>
                    <div>
                        <input type="text" name="ece_syll_chap3" id="ece_syllabus-chap-3" className='data' />
                    </div>

                    <label htmlFor="descriptio3">Description</label>
                    <div>
                        <input type="text" name="ece_desc_chap3" id="descriptio3" rows={18} className="data" />
                    </div>
                    <label htmlFor="ece_syllabus-chap-4">Chapter-4</label>
                    <div>
                        <input type="text" name="ece_syll_chap4" id="ece_syllabus-chap-4" className='data' />
                    </div>
                    <label htmlFor="description4">Description</label>
                    <div>
                        <input type="text" name="ece_desc_chap4" id="description4" rows={18} className="data" />
                    </div>
                    <label htmlFor="ece_syllabus-chap-5">Chapter-5</label>
                    <div>
                        <input type="text" name="ece_syll_chap5" id="ece_syllabus-chap-5" className='data' />
                    </div>
                    <label htmlFor="description5">Description</label>
                    <div>
                        <input type="text" name="ece_desc_chap5" id="description5" rows={18} className="data" />
                    </div>
                    <label htmlFor="ece_syllabus-chap-6">Chapter-6</label>
                    <div>
                        <input type="text" name="ece_syll_chap6" id="ece_syllabus-chap-6" className='data' />
                    </div>
                    <label htmlFor="descriptio6">Description</label>
                    <div>
                        <input type="text" name="ece_desc_chap6" id="descriptio6" rows={18} className="data" />
                    </div>
                    <div className="buttons">
                        <button type='button' className='previous' onClick={prevPage}>Prev</button>
                        <button type="button" className="next" onClick={nextPage2}>Next</button>
                    </div>
                </div>
                <div id="ee">
                    <h3>Electrical Engineering</h3>
                    <label htmlFor="ee_syllabus-chap-1">Chapter-1</label>
                    <div>
                        <input type="text" name="ee_syll_chap1" id="ee_syllabus-chap-1" className='data' />
                    </div>
                    <label htmlFor="description1">Description</label>
                    <div>
                        <input type="text" name="ee_desc_chap1" id="description1" className="data" />
                    </div>
                    <label htmlFor="ee_syllabus-chap-2">Chapter-2</label>
                    <div>
                        <input type="text" name="ee_syll_chap2" id="ee_syllabus-chap-2" className='data' />
                    </div>
                    <label htmlFor="description2">Description</label>
                    <div>
                        <input type="text" name="ee_desc_chap2" id="description2" className="data" />
                    </div>
                    <label htmlFor="ee_syllabus-chap-3">Chapter-3</label>
                    <div>
                        <input type="text" name="ee_syll_chap3" id="ee_syllabus-chap-3" className='data' />
                    </div>
                    <label htmlFor="description3">Description</label>
                    <div>
                        <input type="text" name="ee_desc_chap3" id="description3" className="data" />
                    </div>
                    <label htmlFor="ee_syllabus-chap-4">Chapter-4</label>
                    <div>
                        <input type="text" name="ee_syll_chap4" id="ee_syllabus-chap-4" className='data' />
                    </div>
                    <label htmlFor="description4">Description</label>
                    <div>
                        <input type="text" name="ee_desc_chap4" id="description4" className="data" />
                    </div>
                    <label htmlFor="ee_syllabus-chap-5">Chapter-5</label>
                    <div>
                        <input type="text" name="ee_syll_chap5" id="ee_syllabus-chap-5" className='data' />
                    </div>
                    <label htmlFor="description5">Description</label>
                    <div>
                        <input type="text" name="ee_desc_chap5" id="description5" className="data" />
                    </div>
                    <label htmlFor="ee_syllabus-chap-6">Chapter-6</label>
                    <div>
                        <input type="text" name="ee_syll_chap6" id="ee_syllabus-chap-6" className='data' />
                    </div>
                    <label htmlFor="description6">Description</label>
                    <div>
                        <input type="text" name="ee_desc_chap6" id="description6" className="data" />
                    </div>
                    <div className="buttons">
                        <button type='button' className='previous' onClick={prevPage2}>Prev</button>
                        <button type="button" className="next" onClick={nextPage3}>Next</button>
                    </div>
                </div>
                <div id="me">
                    <h3>Mechanical Engineering</h3>
                    <label htmlFor="me_syllabus-chap-1">Chapter-1</label>
                    <div>
                        <input type="text" name="me_syll_chap1" id="me_syllabus-chap-1" className='data' />
                    </div>
                    <label htmlFor="desc1">Description</label>
                    <div>
                        <input type="text" name="me_desc_chap1" id="desc1" />
                    </div>
                    <label htmlFor="me_syllabus-chap-2">Chapter-2</label>
                    <div>
                        <input type="text" name="me_syll_chap2" id="me_syllabus-chap-2" className='data' />
                    </div>
                    <label htmlFor="desc2">Description</label>
                    <div>
                        <input type="text" name="me_desc_chap2" id="desc2" className='data' />
                    </div>
                    <label htmlFor="me_syllabus-chap-3">Chapter-3</label>
                    <div>
                        <input type="text" name="me_syll_chap3" id="me_syllabus-chap-3" className='data' />
                    </div>
                    <label htmlFor="desc3">Description</label>
                    <div>
                        <input type="text" name="me_desc_chap3" id="desc3" className='data' />
                    </div>
                    <label htmlFor="me_syllabus-chap-4">Chapter-4</label>
                    <div>
                        <input type="text" name="me_syll_chap4" id="me_syllabus-chap-4" className='data' />
                    </div>
                    <label htmlFor="desc4">Description</label>
                    <div>
                        <input type="text" name="me_desc_chap4" id="desc4" className='data' />
                    </div>
                    <label htmlFor="me_syllabus-chap-5">Chapter-5</label>
                    <div>
                        <input type="text" name="me_syll_chap5" id="me_syllabus-chap-5" className='data' />
                    </div>
                    <label htmlFor="desc5">Description</label>
                    <div>
                        <input type="text" name="me_desc_chap5" id="desc5" className='data' />
                    </div>
                    <label htmlFor="me_syllabus-chap-6">Chapter-6</label>
                    <div>
                        <input type="text" name="me_syll_chap6" id="me_syllabus-chap-6" className='data' />
                    </div>
                    <label htmlFor="desc6">Description</label>
                    <div>
                        <input type="text" name="me_desc_chap6" id="desc6" className='data' />
                    </div>
                    <div className="buttons">
                        <button type='button' className='previous' onClick={prevPage3}>Prev</button>
                        <button type="button" className="next" onClick={nextPage4}>Next</button>
                    </div>
                </div>
                <div id="cse">
                    <h3>Computer Science Engineering</h3>
                    <label htmlFor="cse_syllabus-chap-1">Chapter-1</label>
                    <div>
                        <input type="text" name="cse_syll_chap1" id="cse_syllabus-chap-1" className='data' />
                    </div>
                    <label htmlFor="description_1">Description</label>
                    <div>
                        <input type="text" name="cse_desc_chap1" id="description_1" className="data" />
                    </div>
                    <label htmlFor="cse_syllabus-chap-2">Chapter-2</label>
                    <div>
                        <input type="text" name="cse_syll_chap2" id="cse_syllabus-chap-2" className='data' />
                    </div>
                    <label htmlFor="description_2">Description</label>
                    <div>
                        <input type="text" name="cse_desc_chap2" id="description_2" className="data" />
                    </div>
                    <label htmlFor="cse_syllabus-chap-3">Chapter-3</label>
                    <div>
                        <input type="text" name="cse_syll_chap3" id="cse_syllabus-chap-3" className='data' />
                    </div>
                    <label htmlFor="description_3">Description</label>
                    <div>
                        <input type="text" name="cse_desc_chap3" id="description_3" className="data" />
                    </div>
                    <label htmlFor="cse_syllabus-chap-4">Chapter-4</label>
                    <div>
                        <input type="text" name="cse_syll_chap4" id="cse_syllabus-chap-4" className='data' />
                    </div>
                    <label htmlFor="description_4">Description</label>
                    <div>
                        <input type="text" name="cse_desc_chap4" id="description_4" className="data" />
                    </div>
                    <label htmlFor="cse_syllabus-chap-5">Chapter-5</label>
                    <div>
                        <input type="text" name="cse_syll_chap-5" id="cse_syllabus-chap5" className='data' />
                    </div>
                    <label htmlFor="description_5">Description</label>
                    <div>
                        <input type="text" name="cse_desc_chap5" id="description_5" className="data" />
                    </div>
                    <label htmlFor="cse_syllabus-chap-6">Chapter-6</label>
                    <div>
                        <input type="text" name="cse_syll_chap6" id="cse_syllabus-chap-6" className='data' />
                    </div>
                    <label htmlFor="description_6">Description</label>
                    <div>
                        <input type="text" name="cse_desc_chap6" id="description_6" className="data" />
                    </div>
                    <div className="buttons">
                        <button type='button' className='previous' onClick={prevPage4}>Prev</button>
                    </div>
                </div>
            </div>

            <button>Submit</button>
        </form>
    )
}
