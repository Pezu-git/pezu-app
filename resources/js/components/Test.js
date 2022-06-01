
import React, { useState, useEffect } from 'react';

export default function Test() {
    const [state, setState] = useState('Выбрать');


    const apiClient = axios.create({
        baseURL: 'http://127.0.0.1:8000/api',
        withCredentials: true,
      });

      const onSubmit = async (e) => {
        e.preventDefault()
        await apiClient.get('http://127.0.0.1:8000/api/test').then((response) => {
          if (response.status === 200) {
            setState(response.data['message'])
          }
        })
          .catch((err) => {
            console.log(err)
          })
      }

      return (
        
            <input type='submit' value={state} onClick={onSubmit} />
           
      )
}