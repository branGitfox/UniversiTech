import Home from "../pages/home/Home";
import Connexion from "../pages/connexion/Connexion";
import Inscription from "../pages/inscription/Inscription";
import Event from "../pages/event/Event"
import Emploi from "../pages/emploidutemps/Emploi"
import Note from "../pages/notes/Note"
import Emploidutempsbyfiliere from "../pages/emploidutempsbyfiliere/Emploidutempsbyfiliere"
import TrueEdt from "../pages/trueedt/TrueEdt";
import Notes from "../pages/note/Notes";
import Homeadmin from "../pages/homeadmin/Homeadmin";
import Modifevent from "../updates/eventmodif/Modifevent";
import Modifnote from "../updates/notemodif/Modifnote";
import Modifemploidutemps from "../updates/emploimodif/Modifemploidutemps";





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
    {
        //tsy ilaignna
        path: "/admin",
        page: Homeadmin
    }, 
    {
        //tsy ilaignna
        path: "/modifevent",
        page: Modifevent
    }, 
    {
        //tsy ilaignna
        path: "/modifnote",
        page: Modifnote
    }, 
    {
        //tsy ilaignna
        path: "/modifemploidutemps",
        page: Modifemploidutemps
    }, 
    // //route ny erreur ity
    // {
    //     path:"/notFound"
        
    // }


    // {

    //     path: "/emploie",
    //     page: Notes
    // },


]
export default NavData