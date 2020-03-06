# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

rails new my_app -d potsgresql -T



2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - gets
library - function name
:id - information that will be imputed into the url
book - name of the rails app
show - name of function location

3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

rails db: migration add_foreign_key
go into migration file and you add to name of the model then what you calling the new column, ending with the data type being an integer.
rails db: migrate



4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

rails generate model Person shirt:string pants:string shoes:string



5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

validates :shirt, :pants, :shoes, presence:true 
