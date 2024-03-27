<div class="page-head">
    <h2 class="pull-left">Custome Categories Data</h2>

    <!-- Breadcrumb -->
    <div class="bread-crumb pull-right">
        <a href="<?php echo site_url('admin') ?>"><i class="icon-home"></i> <?=lang('Home');?></a>
        <!-- Divider -->
        <span class="divider">/</span>
        <a class="bread-current" href="<?=site_url('admin/customaj');?>"><?='Custom Page';?></a>
        <!-- Divider -->
        <span class="divider">/</span>
        <a class="bread-current" href="#">Custome Categories Data</a>
    </div>
    <div class="clearfix"></div>
</div>

<div class="matter">
    <div class="container" id="edit-form">

        <div class="row">
            <div class="col-md-12">
                <div class="widget wlightblue">

                    <div class="widget-head">
                        <div class="pull-left">Categories Data</div>
                        <div class="widget-icons pull-right">
                            <a class="wminimize" href="#"><i class="icon-chevron-up"></i></a>
                        </div>
                        <div class="clearfix"></div>
                    </div>

                    <div class="widget-content">
                        <div class="padd">
                            <?=validation_errors();?>
                            <?php 
                                if ($this->session->flashdata('message')): 
                                    echo $this->session->flashdata('message');
                                endif;
                            ?>
                            <?php if ($this->session->flashdata('error')): ?>
                            <p class="label label-important validation"><?=$this->session->flashdata('error');?></p>
                            <?php endif; ?>
                            <hr />

                            <!-- Form starts.  -->
                            <?=form_open_multipart(NULL, array('class' => 'form-horizontal', 'role' => 'form'));?>

                            <div class="form-group">
                                <label class="col-lg-3 control-label">Categories</label>
                                <div class="col-lg-9">
                                    <?=form_dropdown('parent_id', $treefield_no_parents, $this->input->post('parent_id') ? $this->input->post('parent_id') : $treefield->parent_id, 'class="form-control" required') ?>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-3 control-label">Title</label>
                                <div class="col-lg-9">
                                    <?=form_input('title', set_value('title', $treefield->{"title"}), 'class="form-control" id="inputTitle" placeholder="Title"');?>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-3 control-label">Description</label>
                                <div class="col-lg-9">
                                    <?=form_textarea('description', set_value('description', $treefield->{"description"}), 'class="form-control" id="inputDescription" placeholder="Description"');?>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-3 control-label">Images { <code>Ctrl,Command + Select</code>
                                    }</label>
                                <div class="col-lg-9">
                                    <input type="file" name="c_image[]" class="form-control"
                                        accept="image/png, image/jpg, image/jpeg" multiple required>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-lg-offset-3 col-lg-9">
                                    <?=form_submit('submit', lang('Save'), 'class="btn btn-primary"');?>
                                </div>
                            </div>
                            <?=form_close();?>
                        </div>
                    </div>

                    <div class="widget-foot">
                        <!-- Footer goes here -->
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="widget wblue">
                    <div class="widget-head">
                        <div class="pull-left">Categories Data Value</div>
                        <div class="widget-icons pull-right">
                            <a class="wminimize" href="#"><i class="icon-chevron-up"></i></a>
                        </div>
                        <div class="clearfix"></div>
                    </div>

                    <div class="widget-content">
                        <table class="table table-bordered footable table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <!-- <th class="control">Edit</th> -->
                                    <th class="control">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php if (sw_count($tree_listings)): foreach ($tree_listings as $listing_item): $images = json_decode($listing_item->cdImages); ?>
                                <tr>
                                    <td><?=$listing_item->cdId;?></td>
                                    <td>
                                        <?php foreach($images as $img): ?>
                                        <img src="<?=base_url($img);?>" width="60" alt="">
                                        <?php endforeach; ?>
                                    </td>
                                    <td><?=$listing_item->cdTitle;?></td>
                                    <!-- <td><?php echo btn_edit('admin/treefield/edit/' . $option->id . '/' . $listing_item->cdId) ?>
                                    </td> -->
                                    <td>
                                        <?=btn_delete('admin/customaj/deleteCategoriesData/'.$listing_item->cdId);?>
                                    </td>
                                </tr>
                                <?php endforeach; ?>
                                <?php else: ?>
                                <tr>
                                    <td colspan="20"><?php echo lang('We could not find any'); ?></td>
                                </tr>
                                <?php endif; ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="https://cdn.ckeditor.com/4.17.1/standard/ckeditor.js"></script>
<script type="text/javascript">
    CKEDITOR.replace('inputDescription');
</script>