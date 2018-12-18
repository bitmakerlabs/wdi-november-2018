class MonstersController < ApplicationController
  def index
    @monsters = Monster.all

    respond_to do |format|
      format.html
      format.text
      format.json do
        render json: @monsters.map { |monster_obj|
          {full_name: monster_obj.name,
           location: monster_obj.home,
           creepiness_factor: monster_obj.creepiness
          }
        }
      end
    end
  end
end


