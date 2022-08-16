class Api::ProfilesController < ApplicationController
    def index
        @profiles = Profile.all
        render :index
    end

    def create
        @profile = Profile.new(profile_params)

        if @profile.save
            render :show
        else
            render json: @profile.errors.full_messages, status: 422
        end
    end

    def update
        @profile = Profile.find(params[:id])

        if @profile.update(profile_params)
            render :show
        else
            render json: ['There was an error updating the profile'], status: 422
        end
    end

    def destroy
        @profile = Profile.find(params[:id])

        if @profile
            @profile.destroy
        else
            render json: ['Cannot delete this profile'], status: 422
        end
    end

    private
    def profile_params
        params.require(:profile).permit(:name, :avatar, :user_id)
    end
end