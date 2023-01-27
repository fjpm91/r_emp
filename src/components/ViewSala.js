import { ErrorResponse } from '@remix-run/router';
import React, { useEffect, useState, useRef } from 'react'; //imr
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from "../api/AxiosApi";

const ViewSala = () => {
    return(
        <div className='wrapper'>
            <div className='imgsala'>

            </div>
            <div>
                <p>Reuniones</p>
                <p>television

                </p>
            </div>
        </div>
    )
}

export default ViewSala;