import logo from './logo.svg';
import {BrowserRouter as Router,Link,Switch,Route,} from 'react-router-dom';
import './App.css';
import AddPhoto from './components/AddPhoto'
import ViewAlbumList from './components/ViewAlbumList';
import ViewAlbum from './components/ViewAlbum';
import AddGalleryPhoto from './components/add_gallery_photo'
function App() {
  return (
    <div>
     <Router>
    <Switch>
     <Route exact path='/' component={AddPhoto} />
     <Route exact path='/view_album_list' component={ViewAlbumList} />
     <Route exact path='/view_album/:id' component={ViewAlbum} />
     <Route exact path='/add_gallery_photo/:id' component={AddGalleryPhoto} />



    </Switch>
     </Router>
    </div>
  );
}

export default App;
