import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import { get_album } from '../actions/albumAction';
class AlbumList extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.get_album();
    }

    get_album = async () => {
        const id = this.props.match.params.id

        const data = await get_album(id);
        this.setState({
            data: data.albumdata
        })
    }
    render() {
        const { data } = this.state
        console.log(data, "data")
        return (
            <div>

                < div class="container">
                    <div class="row">
                        <h2><a href="/view_album_list">Gallery</a></h2>
                        {data && data.map((data, i) => {
                            return (
                                <div class="col-md-4">
                                    <div class="thumbnail">
                                        <p>
                                            <img src={"http://localhost:1000/uploads/" + data.album_image} alt="" 
                                            style={{ width: "200px" }} /></p>
                                        <div class="caption">
                                        </div>

                                    </div>

                                </div>
                            )

                        })
                        }


                    </div>
                </div>

            </div>
        )
    }
}
export default AlbumList;