import fetch from 'node-fetch';

export function createList() {
    fetch('https://playground.4geeks.com/apis/fake/todos/user/wilclerson', {
      method: 'POST', 
      body: JSON.stringify([]),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
      })
      .then(response => console.log('Success:', response))
      .catch(error => console.error(error));
}

export function deleteList() {
  fetch('https://playground.4geeks.com/apis/fake/todos/user/wilclerson', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then(response => console.log('Success:', response))
    .catch(error => console.error(error));
}

export function updateList(data) {
    fetch('https://playground.4geeks.com/apis/fake/todos/user/wilclerson', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
      })
      .then(response => console.log('Success:', response))
      .catch(error => console.error(error));
}