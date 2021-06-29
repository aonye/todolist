/*Your ‘todos’ are going to be objects that you’ll want to dynamically create, 
which means either using factories or constructors/classes to generate them.


//Need a factory for creating todos.
//Need to save them to localstorage (different module)

*/
const taskItem = (title, descript, dueDate, priority, notes="") => {
    return { title, descript, dueDate, priority, notes};
};

export default taskItem;

//To do properties
//At a minimum they should have a title, description, dueDate and priority. 
//You might also want to include notes or even a checklist (toggle when task complete).



//General to do list at top
//Your todo list should have projects.
//Project header (with default - MyProject)
//Users should be able to create new projects and choose which project their todos go into.
//New projects also have access to task objects


// **BIGGEST THING TO BE AWARE OF**
// You should separate your application logic (i.e. creating new todos, setting todos as complete, changing todo priority etc.) 
// from the DOM-related stuff, so keep all of those things in separate modules.

//Interface should have the following:

//view all projects
//view all todos in each project (probably just the title and duedate.. perhaps changing color for different priorities)
//expand a single todo to see/edit its details
//delete a todo





