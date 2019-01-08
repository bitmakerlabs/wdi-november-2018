class TodosController < ApplicationController
  def index
    @todo = Todo.new
    @todos = Todo.all
  end

  def create
    @todo = Todo.new
    @todo.content = params[:todo][:content]
    if @todo.save
      if request.xhr?
        puts ".................this request is from axios"
        respond_to do |format|

          format.html do
            puts ".............response format as html"
            render partial: 'todo', locals:{todo: @todo}
          end
          format.json {render json:@todo}

        end
      else
     redirect_to root_url
      end
    end
  end

  def new
    @todo = Todo.new
  end
end
