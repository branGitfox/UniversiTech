import Home from "../pages/home/Home";
import Connexion from "../pages/connexion/Connexion";
import Inscription from "../pages/inscription/Inscription";
import Event from "../pages/event/Event"
import Emploi from "../pages/emploidutemps/Emploi"
import Note from "../pages/notes/Note"
import Emploidutempsbyfiliere from "../pages/emploidutempsbyfiliere/Emploidutempsbyfiliere"
import TrueEdt from "../pages/trueedt/TrueEdt";
import Notes from "../pages/note/Notes";




const NavData = [
    {
        path: "/",
        page: Home, 
        
    },
    {

        path: "/connexion",
        page: Connexion
    },
    {

        path: "/inscription",
        page: Inscription
    },
    {

        path: "/evenement",
        page: Event
    },
    {

        path: "/emploidutemps",
        page: Emploi
    },
    {

        path: "/note",
        page: Note
    },
    {

        path: "/emploidutempsbyfiliere/:annee",
        page: Emploidutempsbyfiliere
    },
    {

        path: "/trueedt/:annee/:filiere",
        page: TrueEdt
    },
    {

        path: "/notes",
        page: Notes
    },

    // {

    //     path: "/emploie",
    //     page: Notes
    // },


]
export default NavData