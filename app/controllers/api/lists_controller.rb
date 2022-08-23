class Api::ListsController < ApplicationController
    def index
        @lists = List.all
        render :index
    end

    def show
        @list = List.find(params[:id])

        if @list
            render :show
        else
            render json: ['List item now found'], status: 422
        end
    end

    def create
        @list = List.new(list_params)

        if @list.save!
            render :show
        else
            render json: ['List item could not be created'], status: 422
        end
    end

    def destroy
        @list = List.find(params[:id])

        if @list
            @list.destroy
            render :show
        else
            render json: ['List item could not be deleted'], status: 422
        end
    end

    private
    def list_params
        params.require(:list).permit(:profile_id, :video_id)
    end
end