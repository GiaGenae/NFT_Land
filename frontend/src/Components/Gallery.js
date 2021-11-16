import { NavLink } from "react-router-dom";

const Gallery = ({ gallery }) => (
    <div className="col-md-4 mb-4">
        <div key={gallery.id} className="card">
            <div className="card-header bg-info">
                <h5 className="card-title text-center text-green">{gallery.title}</h5>
            </div>
            <ul className="list-group-item text-center">
                <li className="list-group-item text-center">
                    <NavLink className="btn btn-outline-secondary" to={`/gallery/${gallery.id}`}>View Art</NavLink>
                </li>
            </ul>
        </div>
    </div>
)

export default Gallery;