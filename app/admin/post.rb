ActiveAdmin.register Post do

  permit_params :title, :content, :likes, :icon

  form partial: 'form'
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # permit_params :list, :of, :attributes, :on, :model
  #
  # or
  #
  # permit_params do
  #   permitted = [:permitted, :attributes]
  #   permitted << :other if resource.something?
  #   permitted
  # end
  controller do
    def edit
      @post = Post.find params[:id]
      @images = @post.images
    end

    def update
      debugger
      if params[:post]
        @post = Post.find params[:id]
        @post.update post_params
      end
      redirect_to '/admin/posts'
    end

    def post_params
      params.require(:post).permit(:title, :content, :likes, :icon)
    end
  end 
end
