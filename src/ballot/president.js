import ScrollToTop from '../ScrollToTop.js'
const President = props => {

    const handlePresident = e => {
        const target = e.target
        const pres = target.value   


        props.setPresident(pres)
    }

    return (
        <>
        <ScrollToTop/>
            <h1 className="president">President</h1>
            <div className="pres-box">
                    <div className="pres-cand">
                        <div className="profile pres1"></div>
                        <div className="pres-info">
                            <div className="pres-name">
                                <h2>Alyanna Nicolas</h2>
                                <p>Mabuhay Partylist</p>
                            </div>
                            <input type="radio" name="pres-radio" value="Alyanna" onChange={handlePresident} checked={props.president === 'Alyanna'}></input>
                        </div>
                    </div>

                    <div className="pres-cand">
                        <div className="profile pres2"></div>
                        <div className="pres-info">
                            <div className="pres-name">
                                <h2>Dexter Labra</h2>
                                <p>Rainbow Partylist</p>
                            </div>
                            <input type="radio" name="pres-radio" value="Dexter" onChange={handlePresident} checked={props.president === 'Dexter'}></input>
                        </div>
                    </div>

                    <div className="pres-cand">
                        <div className="profile pres3"></div>
                        <div className="pres-info">
                            <div className="pres-name">
                                <h2>Allyson Briones</h2>
                                <p>Basketball Partylist</p>
                            </div>
                            <input type="radio" name="pres-radio" value="Allyson" onChange={handlePresident} checked={props.president === 'Allyson'}></input>
                        </div>
                    </div>

                    <div className="pres-cand">
                        <div className="profile pres4"></div>
                        <div className="pres-info">
                            <div className="pres-name">
                                <h2>Karylle Lozada</h2>
                                <p>UI Partylist</p>
                            </div>
                            <input type="radio" name="pres-radio" value="Karylle" onChange={handlePresident} checked={props.president === 'Karylle'}></input>
                        </div>
                    </div>
            </div>
        </>
    )

}

export default President;
