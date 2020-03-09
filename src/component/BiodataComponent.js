import React from 'react'
import Photo from '../image/FotoProfil.jpg'

export default function BiodataComponent(props) {
    return (
        <div>
            <div>
                <div class="card">
                   <div class="text-center">
                       <div>
                           <img src={Photo} alt="Photo" width="200" height="auto" />
                       </div>
                        <div>
                            <p>{props.name}</p>
                        </div>
                        <div>
                            <p>{props.job}</p>
                        </div>
                        <div>
                            <p>{props.college}</p>
                        </div>
                        <div>
                            <p>{props.kelas}</p>
                        </div>
                        <div>
                            <p>{props.alamat}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
