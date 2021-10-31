import React, { useEffect, useState } from 'react';

const ManagePackages = () => {

    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:5000/packages/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    const remaining = packages.filter(singlePackage => singlePackage._id !== id);
                    setPackages(remaining);
                    alert("Deleted Successfully")
                }
            })

    }

    return (
        <div>
            <h2>Manage Packages</h2>
            {
                packages.map(singlePackage => <div key={singlePackage._id}>
                    <h3>{singlePackage.name}</h3>
                    <button onClick={() => handleDelete(singlePackage._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManagePackages;