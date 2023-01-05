import pixel from "../assets/PXL_20220806_111834675.jpg"



export default function Information () {
    return  (
        <div>
            <img src={pixel} className="card-img-top"  alt="..."></img>
            
                <h3>Markian Mumba</h3>
                <h4>Frontend Developer</h4>
                <h5> markmumba.github.io </h5>
        
            <div className="row">
                <div className="col-1"></div>
                    <div className="col-5">
                      <button type="button" className="btn btn-light " style= {{fontSize:15}}><i className="bi bi-envelope-fill" style = {{paddingRight:5}}></i>Email</button>
                    </div>
                    <div className="col-5">
                        <a href="#root" className="btn btn-primary"style= {{fontSize:15}}><i class="bi bi-linkedin" style = {{paddingRight:5}}></i>Linkedin</a>
                    </div>
                <div className="col-1 "></div>
            </div>
        </div>
    )
}