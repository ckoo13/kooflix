class ProfilesController < ApplicationController
    def index
        @profiles = current_user.profiles
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
        
    end

    def destroy

    end

    private
    def profile_params
        params.require(:profile).permit(:name, :avatar)
    end
end